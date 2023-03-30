import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework';
import { Events } from 'discord.js';
import {
	isHumanMessage,
	removeDiscordMarkdown,
} from '~discord-bot/utils/utils';
import { ALLOWED_AUTO_THREAD_CHANNEL_TYPES } from '@answeroverflow/constants';
import type { AOEvents } from '~discord-bot/utils/events';

async function autoThread(data: AOEvents['messageCreate']) {
	const message = data.eventData[0];
	const channelSettings = data.extra.channelSettings;
	if (!channelSettings?.flags.autoThreadEnabled) return;

	const channelType = message.channel.type;

	if (!ALLOWED_AUTO_THREAD_CHANNEL_TYPES.has(channelType)) return;
	if (!isHumanMessage(message)) return;

	// Channel is text based, and message has been sent by a human

	let textTitle = `${message.member?.nickname ?? message.author.username} - ${
		message.cleanContent
	}`;
	// Remove all markdown characters
	textTitle = removeDiscordMarkdown(textTitle);
	if (textTitle.length > 47) {
		textTitle = textTitle.slice(0, 47) + '...';
	}
	await message.startThread({
		name: textTitle,
		reason: 'Answer Overflow auto thread',
	});
}

@ApplyOptions<Listener.Options>({ event: Events.ClientReady })
export class OnMessage extends Listener {
	public run() {
		this.container.events.subscribe((event) => {
			if (event.action !== 'messageCreate') return;
			void autoThread(event.value);
		});
	}
}
