import { motion } from 'framer-motion'; import styled from 'styled-components'; export const StyledBars = styled(motion.div)` display: flex; flex-direction: column; gap: .875rem; width: 8.875rem; @media(max-width: 950px) { gap: .6rem; } @media(max-width: 600px) { gap: .2rem; } `; export const FirstBar = styled(motion.span)` display: block; align-self: start; width: 5.5rem; height: .25rem; background-color: var(--brand1); margin-top: 1.6rem; @media(max-width: 950px) { width: 4rem; } @media(max-width: 600px) { width: 2.75rem; height: .125rem; margin-top: .6rem; } `; export const LastBar = styled(motion.span)` display: block; align-self: flex-end; width: 5.5rem; height: .25rem; background-color: var(--brand1); margin-bottom: 2rem; margin-left: 3rem; @media(max-width: 950px) { width: 4rem; } @media(max-width: 600px) { width: 2.75rem; height: .125rem; margin-bottom: .8rem; margin-left: 1.5rem; } `