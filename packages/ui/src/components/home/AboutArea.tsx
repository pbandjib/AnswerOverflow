import { Heading } from '~ui/components/primitives/Heading';
import { Paragraph } from '~ui/components/primitives/Paragraph';
import Balancer from 'react-wrap-balancer';
import { GetStarted } from '../Callouts';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { cn } from '~ui/utils/styling';

// TODO: Link to docs for feature?
const HomeFeature = (props: {
	featureName: React.ReactNode;
	featureDescription?: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col items-center justify-center rounded-standard border-2 border-white/[.13] bg-[#fafafa] px-2 py-4 text-center drop-shadow-xl dark:bg-[#191B1F] md:px-20 md:py-10 ">
			<Paragraph className="text-xl md:text-2xl">{props.featureName}</Paragraph>
			<Paragraph className="text-lg">{props.featureDescription}</Paragraph>
		</div>
	);
};

const FeaturesSection = (props: { className?: string }) => {
	return (
		<div className={cn('w-full', props.className)}>
			<Heading.H2 className="text-center md:text-right">
				Tools tailored to your community
			</Heading.H2>
			<Heading.H2 className="pt-0 text-center text-lg md:text-right">
				<Balancer>
					Your community is unique, {"it's"} time you had a bot that matches
					that
				</Balancer>
			</Heading.H2>

			<div className="mt-2 grid grid-cols-1 grid-rows-1 gap-10 md:grid-cols-2 md:grid-rows-2">
				<HomeFeature
					featureName="🔎 Index Content Into Google"
					featureDescription="Organically gain more users by ranking at the top of Google search results"
				/>
				<HomeFeature
					featureName="🤖 AI Question Answers"
					featureDescription={
						<>
							<b>Trained off your community data</b>, automate the process of
							answering repeat questions
						</>
					}
				/>
				<HomeFeature
					featureName="📈 Community Insights"
					featureDescription="Understand what your community is asking the most about and where to improve your documentation"
				/>
				<HomeFeature
					featureName="💻 Host On Your Own Domain"
					featureDescription="Boost your website's with organic content generated by your community"
				/>
			</div>
		</div>
	);
};

const EndSection = (props: { className?: string }) => {
	return (
		<section
			className={cn(
				'flex w-full flex-col items-center justify-center border-2 border-white/[.13] bg-[#ffffffd2] drop-shadow-2xl dark:bg-[#191B1F] dark:drop-shadow',
				props.className,
			)}
		>
			<Heading.H2 className="text-center md:w-full">
				<Balancer>Setup in your server for free</Balancer>
			</Heading.H2>
			<Paragraph className="text-center md:w-full">
				<Balancer className="md:w-full">
					Join over 50+ communities using Answer Overflow to make the most of
					their support
				</Balancer>
			</Paragraph>
			<GetStarted variant={'default'} />
		</section>
	);
};
type FeaturedCommunityProps = {
	id: string;
	name: string;
	iconUrl: string;
	approximateMemberCount: string;
};

const featuredCommunities: FeaturedCommunityProps[] = [
	{
		name: 'Mudlet',
		id: '283581582550237184',
		iconUrl: '/featured-communities/mudlet_logo.png',
		approximateMemberCount: '5,000+',
	},
	{
		name: 'Apache TinkerPop',
		id: '838910279550238720',
		iconUrl: '/featured-communities/apache_tinkerpop_logo.png',
		approximateMemberCount: '1,000+',
	},
	{
		name: 'Reactiflux',
		id: '102860784329052160',
		iconUrl: '/featured-communities/reactiflux_logo.png',
		approximateMemberCount: '200,000+',
	},
	{
		name: 'C#',
		id: '143867839282020352',
		iconUrl: '/featured-communities/csharp_logo.png',
		approximateMemberCount: '45,000+',
	},
	{
		name: 'Sapphire',
		id: '737141877803057244',
		iconUrl: '/featured-communities/sapphire_logo.png',
		approximateMemberCount: '2,000+',
	},
	{
		name: 'FIFA Live Editor',
		id: '701008832645824553',
		iconUrl: '/featured-communities/fifa_live_editor_logo.png',
		approximateMemberCount: '5,000+',
	},
	{
		name: 'Twill',
		id: '811936425858695198',
		iconUrl: '/featured-communities/twill_logo.png',
		approximateMemberCount: '1,000+',
	},
	{
		name: 'Robolab.io',
		id: '462274708499595264',
		iconUrl: '/featured-communities/robolabio_logo.png',
		approximateMemberCount: '45,000+',
	},
];

const FeaturedCommunity = (props: FeaturedCommunityProps) => {
	return (
		<Link
			href={`c/${props.id}`}
			style={{
				width: '80%',
			}}
			tabIndex={-1}
		>
			<div className="flex flex-col items-center ">
				<Image
					src={props.iconUrl}
					width={64}
					height={64}
					alt={`${props.name} community icon`}
					className="rounded-full"
				/>

				<Paragraph className="py-2 text-center text-lg dark:text-white">
					{props.name}
				</Paragraph>
				<Paragraph className="py-0 text-center dark:text-white">
					{props.approximateMemberCount} members
				</Paragraph>
			</div>
		</Link>
	);
};

// TODO: The marquee is really hacky here to get sizing right on all devices
const FeaturedCommunitiesSection = (props: { className?: string }) => {
	return (
		<div className={cn('text-center overflow-x-hidden', props.className)}>
			<Heading.H2>
				<Balancer>Used by some of the largest support servers</Balancer>
			</Heading.H2>
			<div className="flex max-w-vw90 items-center pt-20 sm:max-w-vw70 2xl:max-w-screen-xl">
				<Marquee gradient={false} speed={30}>
					{featuredCommunities.map((community) => (
						<div key={community.id} className="mx-10 my-0">
							<FeaturedCommunity {...community} />
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export const AboutArea = () => {
	return (
		<div className="flex flex-col items-center px-4 pt-10 pb-20 sm:px-[4rem] 2xl:px-[6rem]">
			<FeaturesSection />
			<FeaturedCommunitiesSection className="py-20" />
			<EndSection className="py-20" />
		</div>
	);
};
