"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation'
import BasicInput from "@/shared/Forms/BasicInput";

const SearchInputComponent = (props) => {
    const [searchInput, setSearchInput] = useState('')
    const router = useRouter()
    const searchInputSubmitHandler = (event) => {
        event.preventDefault()
       router.push(`/lists?search=${searchInput}`)
    }
    return (
      <form className="mx-auto w-[690px]" onSubmit={searchInputSubmitHandler}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.654 18.095L21.5835 21.023C21.7201 21.1645 21.7957 21.3539 21.794 21.5506C21.7923 21.7472 21.7134 21.9353 21.5744 22.0744C21.4353 22.2134 21.2472 22.2923 21.0506 22.294C20.8539 22.2957 20.6645 22.2201 20.523 22.0835L17.5935 19.154C15.6791 20.7942 13.2039 21.6291 10.6872 21.4836C8.17053 21.3382 5.808 20.2236 4.09537 18.3737C2.38275 16.5239 1.45317 14.0827 1.50169 11.5622C1.5502 9.04181 2.57305 6.63813 4.35559 4.85559C6.13813 3.07305 8.54181 2.0502 11.0622 2.00169C13.5827 1.95317 16.0239 2.88275 17.8737 4.59537C19.7236 6.308 20.8382 8.67053 20.9836 11.1872C21.1291 13.7039 20.2942 16.1791 18.654 18.0935V18.095ZM11.25 20C13.438 20 15.5365 19.1308 17.0836 17.5836C18.6308 16.0365 19.5 13.938 19.5 11.75C19.5 9.56196 18.6308 7.46354 17.0836 5.91637C15.5365 4.36919 13.438 3.5 11.25 3.5C9.06196 3.5 6.96354 4.36919 5.41637 5.91637C3.86919 7.46354 3 9.56196 3 11.75C3 13.938 3.86919 16.0365 5.41637 17.5836C6.96354 19.1308 9.06196 20 11.25 20Z"
                fill="#6587AB"
              />
            </svg>
          </div>
          <BasicInput placeHolder="Search..." className="p-2 px-4" onChange={(event)=> setSearchInput(event.target.value)} required />
        </div>
      </form>
    );
  };
export default SearchInputComponent  