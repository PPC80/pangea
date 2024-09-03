import { FeaturePointProps } from '@/types'
import React from 'react'
import { Compass, Plane, Globe, BookCheck } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const FeaturePoint = ({icon, title, text}: FeaturePointProps) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[340px]">
      <div className="mb-4">
        {icon}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm">{text}</p>
    </div>
  )
}

const WhyUsSection = () => {

  const features = [
    { icon: <Compass color="#06BF9D" className="w-16 h-16"/>, title: "Asesores Expertos", text: "Te brindamos la mejor asesoría por parte de nuestro equipo de expertos para que tu viaje sea memorable" },
    { icon: <Plane color="#06BF9D" className="w-16 h-16"/>, title: "Expertos Locales", text: "Contamos con guías certificados en todos nuestras destinos para una experiencia de viaje inigualable" },
    { icon: <Globe color="#06BF9D" className="w-16 h-16"/>, title: "Experiencias Únicas", text: "Ofrecemos acceso a experiencias exclusivas y actividades especiales que no encontrarás en ningún otro lugar" },
    { icon: <BookCheck color="#06BF9D" className="w-16 h-16"/>, title: "Asesoría de visado", text: "Asesoramos durante todo el trámite de visado para que puedas viajar a cualquier destino sin inconvenientes" },
  ];

  return (
    <section className='h-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 mt-12 md:mt-18'>
        <SectionTitle
          title='¿Por qué viajar con nosotros?'
          subtitle='Descrube por qué somos tu mejor opción'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeaturePoint 
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
    </section>
  )
}

export default WhyUsSection