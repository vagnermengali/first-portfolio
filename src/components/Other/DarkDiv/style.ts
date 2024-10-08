import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDarkDiv = styled(motion.div)` 
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--black);
    bottom: 100%;
    z-index: 100;
    transition: height 1s ease;
`;
