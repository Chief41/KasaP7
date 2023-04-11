import React from 'react';
import { Banner } from '../components';
import BannerImg from '../assets/about-banner.png';
import Collapse from '../components/Collapse';

const About = () => {
    const fiabilityCollapseTitle = 'Fiabilité';
    const respectCollapseTitle = 'Respect';
    const serviceCollapseTitle = 'Service';
    const securityCollapseTitle = 'Sécurité';
    const fiabilityCollapseText = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const respectCollapseText = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const serviceCollapseText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securityCollapseText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    
    return (
        <div className='md:px-[75px] px-[30px] flex flex-col'>
            <Banner BannerImg={BannerImg} />
            <Collapse title={fiabilityCollapseTitle} text={fiabilityCollapseText}/>
            <Collapse title={respectCollapseTitle} text={respectCollapseText}/>
            <Collapse title={serviceCollapseTitle} text={serviceCollapseText}/>
            <Collapse title={securityCollapseTitle} text={securityCollapseText}/>
        </div>
    );
};

export default About;