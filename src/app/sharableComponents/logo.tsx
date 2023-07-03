import { ChartBarSquareIcon } from '@heroicons/react/24/outline'

export default function AppLogo ( ) {
    return (
        <div className="flex h-16 shrink-0 items-center">
            <ChartBarSquareIcon className="h-9 w-9 text-black-500" />
            <h1 className="pl-2 text-lg font-bold font-serif"> 
                SocialGenius
            </h1>
        </div>   
    )
}