export interface SocialButton {
    id: string,
    link: string,
    icon: string,
    name: string
}

export type HomePageComponentProps = {
    socialButtons: SocialButton[]
}