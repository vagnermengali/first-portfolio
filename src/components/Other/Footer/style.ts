import { motion } from "framer-motion"; import styled from "styled-components"; export const StyledFooter = styled(motion.div)` width: 100%; height: 20rem; background: var(--brand4); display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1.5rem; @media(max-width: 950px) { height: 10rem; gap: .3rem; } @media(max-width: 600px) { height: 10rem; gap: .3rem; } `; export const Link = styled(motion.a)` width: fit-content; color: var(--white); font-size: 1.75rem; line-height: 2.625rem; font-family: var(--jost-light); letter-spacing: 0.1em; transition: 0.3s; text-decoration: none; :hover { color: var(--brand5) } @media(max-width: 950px) { margin-bottom: .3rem; font-size: 22px; line-height: 1.4rem; } @media(max-width: 600px) { margin-bottom: .1rem; font-size: 14px; line-height: 1.4rem; } `