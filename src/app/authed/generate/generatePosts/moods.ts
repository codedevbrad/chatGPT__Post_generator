
import { FaceSmileIcon, FireIcon, HandThumbUpIcon, XMarkIcon, } from '@heroicons/react/20/solid'

export const moods = [
    { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
    { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
    { name: 'Inspired', value: 'Inspired', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
    { name: 'Creative', value: 'thumbsy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
    { name: 'Keep it professional', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
];