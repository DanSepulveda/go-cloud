import React from 'react'

export interface MainProps {
    children: React.ReactNode,
}

export interface ButtonProps {
    children: string,
    id: string,
    type: 'submit' | 'reset' | 'button'
}

export interface SectionProps {
    children: React.ReactNode,
    className?: string
}

export interface InputProps {
    id: string,
    label: string,
    name: string,
    type: string
}

export interface IconProps {
    color: string,
    icon: string
}

export interface CardProps {
    color: string,
    icon: 'downarrow' | 'dialog' | 'check' | 'waiting' | 'phone' | 'close' | 'time',
    title: string,
    number: number
}

export interface RowProps {
    call: {
        phoneNumber: string,
        status_date: string,
        date: string,
        status: string,
        step: string,
        id: string
    },
    key: number,
}