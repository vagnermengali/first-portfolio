import { Skill } from "@/data/SkillData"; import SkillProcess from "@/components/Other/SkillProcess"; import { SkillData } from "@/interfaces/SkillProcessProps/SkillProcessProps"; import { StyledSkillSet, ContainerSkillSet } from "./style"; const SkillSet = () => { return ( <StyledSkillSet> <ContainerSkillSet> {Skill.map((e: SkillData) => ( <SkillProcess key={e.id} title={e.title} years={e.years} percentage={e.percentage} /> ))} </ContainerSkillSet > </StyledSkillSet > ); }; export default SkillSet; 