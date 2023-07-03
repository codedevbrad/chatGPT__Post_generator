"use client";
import { useAuth } from "@clerk/nextjs";
 
export default function IsAuthed() {
  const { isLoaded, userId, sessionId } = useAuth();
 
  return ( <div>  {userId} </div> ) 
}