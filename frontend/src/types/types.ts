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

export interface CardProps {
    color: string,
    icon: 'downarrow' | 'dialog' | 'check' | 'waiting' | 'phone' | 'close' | 'time',
    title: string
}

export interface DataProps {
    telefono: number,
    fecha: string,
    hora: string,
    duracion: string,
    etapa: string,
    pasos: string,
    intentos: number
}

export interface RowProps {
    data: {
        telefono: number,
        fecha: string,
        hora: string,
        duracion: string,
        etapa: string,
        pasos: string,
        intentos: number
    },
    index: number,
}

