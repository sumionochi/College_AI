'use client'
import React from 'react'
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

interface Props {
    itemCount: number,
    pageSize: number,
    currPage: number
}

const Pagination = ({itemCount,pageSize,currPage}: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(itemCount/pageSize);
    
    const changePage = (page: number)=>{
        const params = new URLSearchParams(searchParams ?? '');
        params.set('page', page.toString());
        router.push('?' + params.toString());
    }

    return (
    <div className='flex text-primary flex-col justify-center items-center gap-2'>
        <h1 className='text-secondary'>Page {currPage} of {pageCount}</h1>
        <div className='flex text-primary flex-row gap-2'>
        <Button className='p-2 text-primary bg-secondary  h-10' disabled={currPage===1} onClick={()=> changePage(1)}> 
            <ChevronsLeft className=''/>
        </Button>
        <Button className='p-2 text-primary bg-secondary  h-10' disabled={currPage===1} onClick={()=> changePage(currPage-1)}> 
            <ChevronLeft/>
        </Button>
        <Button className='p-2 text-primary bg-secondary  h-10' disabled={currPage===pageCount} onClick={()=> changePage(currPage+1)}> 
            <ChevronRight/>
        </Button>
        <Button className='p-2 text-primary bg-secondary h-10' disabled={currPage===pageCount} onClick={()=> changePage(pageCount)}> 
            <ChevronsRight/>
        </Button>
        </div>
    </div>
    )
}

export default Pagination