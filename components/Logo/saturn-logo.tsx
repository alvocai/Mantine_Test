import { Image } from "@mantine/core"

interface SaturnLogoProps {
    wid: number;
}

export default function SaturnLogo({wid}:SaturnLogoProps) {
    return(
        <Image 
            src="/saturn.svg"
            width={wid}
            mx="auto" 
        /> 
    )
}