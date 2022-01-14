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
    type?: string
}

export interface IconProps {
    color: string,
    icon: string
}