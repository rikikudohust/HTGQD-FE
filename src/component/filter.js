import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicSelect from './selector';
import EducationSelector from './education';
import EnglishSelector from './english';
import ExperienceSelector from './experience';
import LanguageSelector from './language';
import SexSelector from './sex';
import SkillSelector from './skill';
import CustomizedSelects from './weight';
import ContainerButton from "./FilterButton"
import { Typography, Divider } from '@mui/material';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [education, setEducation] = React.useState('');
  const [english, setEnglish] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [personLanguage, setPersonLanguage] = React.useState([]);
  const [sex, setSex] = React.useState('');
  const [personSkill, setPersonSkill] = React.useState([]);
  const [value, setValue] = React.useState();
  const [w1, setW1] = React.useState();
  const [w2, setW2] = React.useState();
  const [w3, setW3] = React.useState();
  const [w4, setW4] = React.useState();
  const [w5, setW5] = React.useState();

  const handleClick = async () => {
    try {
      var language, language_point
      language = "IELTS"
      if (english == 1) {
        language_point =  2.5
      } else if (english == 2) {
        language_point = 4
      } else if (english == 3) {
        language_point = 5
      } else if (english == 4) {
        language_point = 6
      } else if (english == 5) {
        language_point = 7
      } else {
        language_point = 8
      }
      const body = {
        "name": "Gladys Adams",
        "education": education,
        "language": language,
        "language_point": language_point,
        "exp": experience,
        "sex": sex,
        "personalskill": personSkill,
        "weight": {
          "w1": parseFloat(w1),
          "w2": parseFloat(w2),
          "w3": parseFloat(w3),
          "w4": parseFloat(w4),
          "w5": parseFloat(w5)
        }
      }
      console.log(body)
      const data = await axios.post("http://127.0.0.1:5000/v1/cvs", body)
      console.log(data)
      setValue(data.data)
      console.log(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    console.log(personSkill)
  }, [personSkill])

  return (
    <Box width="100%" >
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        backgroundColor="	#FF8C00"
      // alignItems=""
      >
        <Typography
          variant={"h4"}
          fontFamily="Ubuntu"
          sx={{
            ml: 2,
            // mr: 10,
            color: "#353535",
            letterSpacing: "4 px",
            lineHeight: 1,
            // textAlign: "center",
            marginBottom: 1,
          }}
        >
          Filter Candidate
        </Typography>
      </Box>
      <Box my={5}></Box>

      <Box sx={{ flexGrow: 1 }} ml={1}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            Education
            <EducationSelector setEducation={setEducation} />
          </Grid>
          <Grid item xs={3}>
            English
            <EnglishSelector setEnglish={setEnglish} />
          </Grid>
          <Grid item xs={3}>
            Experience
            <ExperienceSelector setExperience={setExperience} />
          </Grid>
          <Grid item xs={3}>
            Gender
            <SexSelector setSex={setSex} />
          </Grid>
          {/* <Grid item xs={3}>
            Language
            <LanguageSelector setPersonLanguage1={setPersonLanguage} />
          </Grid> */}
          <Grid item xs={3}>
            Skill
            <SkillSelector setPersonSkill1={setPersonSkill} />
          </Grid>
          <Grid item xs={1}>
            <CustomizedSelects name="W1" setValue={setW1} />
          </Grid>
          <Grid item xs={1}>
            <CustomizedSelects name="W2" setValue={setW2} />
          </Grid>
          <Grid item xs={1}>
            <CustomizedSelects name="W3" setValue={setW3} />
          </Grid>
          <Grid item xs={1}>
            <CustomizedSelects name="W4" setValue={setW4} />
          </Grid>
          <Grid item xs={1}>
            <CustomizedSelects name="W5" setValue={setW5} />
          </Grid>
        </Grid>


        <Grid container justifyContent="center" alignItems="center">
          <ContainerButton education={education} english={english} experience={experience} sex={sex} personLanguage={personLanguage} personSkill={personSkill} onClick={handleClick} />
        </Grid>

        <div className='questions'>
          {
            !value ? <div>no post</div> : value.map((post) => {
              return (
                <Box ml={3} >
                  <Box display="flex" flexDirection="row" my={3}>
                    {/* <Box display="flex" flexDirection="column">
                        <Typography color={'#29a329'} variant={'h7'}>{post.vote} votes</Typography>
                        <Typography>{post.question_count_answer} answer</Typography>
                    </Box> */}
                    <Box pl={3} display="flex" alignSelf="center" flexDirection="column">
                    <Typography color={'#29a329'} variant={'h5'}>{post.vote} CV Score: {post.Score}</Typography>
                    <Typography variant='h7'>Full Name: {post.name}</Typography>
                    <Typography>Education: {post.education}</Typography>
                    <Typography>Experience: {post.exp}</Typography>
                    <Typography>English: {post.language.Cert} | {post.language.Point}</Typography>
                    <Typography>Skill: </Typography>
                    {post.personalskill.map((skill) => {
                      return <div><Typography ml={3}>{skill}</Typography></div>
                    })}
                    </Box>
                  </Box>
                  <Divider light />

                </Box>
              )
            }
            )}
        </div>
      </Box>

    </Box>
  );
}