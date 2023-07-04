
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [

    {
      name: 'Smart Recommendations.',
      description:
        'Leverage the power of ChatGPT to receive intelligent suggestions for captivating headlines, catchy phrases, and attention-grabbing hashtags.',
      icon: LockClosedIcon,
    },    
    {
      name: 'Post Generation and Preview.',
      description:
        'Get a glimpse of how your social media posts will look before publishing. Visualize your ideas in real-time and ensure they resonate with your audience.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Save to PDF.',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    }
]

export default function FeaturesComponent ( ) {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
    )
}