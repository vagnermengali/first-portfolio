import { FooterProps } from "@/interfaces/FooterProps/FooterProps"; import { StyledFooter, Link } from "./style"; const Footer = ({email, github}: FooterProps) => { return ( <StyledFooter> <Link href={`mailto:${email}`} target="_blank" > {email} </Link> <Link href={`${github}`} target="_blank" > GitHub </Link> </StyledFooter> ) }; export default Footer; 