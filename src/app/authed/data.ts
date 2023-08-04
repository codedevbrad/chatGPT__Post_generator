import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Generate',       href: '/authed/generate', icon: HomeIcon } , 
    { name: 'Liked Posts' ,   href: '/authed/liked'   , icon: HomeIcon } ,
    { name: 'Develop a Post', href: '/authed/develop' , icon: HomeIcon }
];
  
export {
    navigation
}