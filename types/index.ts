import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface CardProps {
    title: string;
    tourDurationNights: number;
    tourDurationDays: number;
    imageUrl: string;
    imageAlt: string;
}

export interface TestimonialCardProps {
    testimonial: string;
    touristName: string;
    travelDestination: string;
    tripDate: string;
    imageUrl: string;
    imageAlt: string;
    ratingImageUrl: string;
}

export interface FeaturePointProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export interface SectionTitleProps {
    title: React.ReactNode;
    subtitle: string;
    titleStyles?: string;
    subtitleStyles?: string;
}