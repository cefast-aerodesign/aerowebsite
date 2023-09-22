import { React, useState } from 'react';
import { Grid, TextField, Button } from "@mui/material";
import { MailSenderContainer } from './styles';
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { colors } from '../../../shared/colors';
import { H1, H4, P1 } from "../../../fonts";

const HomeMailSender = () => {
    const [name, setname] = useState('');
    const [mail, setmail] = useState('');
    const [message, setmessage] = useState('');
    const [phone, setphone] = useState('');

    return (
        <MailSenderContainer>
            <Grid container spacing={2} direction='row'>
                <Grid item xs>
                    <Grid container spacing={1} direction='column'>
                        <Grid item xs>
                            <H4 color={colors.orange_common}>GOSTOU DO QUE FAZEMOS?</H4>
                        </Grid>
                        <Grid item xs>
                            <H1 color={colors.white}>ENTRE EM CONTATO<br></br>CONOSCO</H1>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Grid container direction='row' spacing={1}>
                        <Grid item xs='auto'> {/* nome */}
                            <TextField id='Nome'/>
                        </Grid>
                        <Grid item xs='auto'> {/* telefone */}
                            <TextField id='Email'/>
                        </Grid>
                        <Grid item xs='auto'> {/* email */}
                            <TextField id='Mensagem'/>
                        </Grid>
                        <Grid item xs='auto'> {/* mensagem */}
                            <TextField id='Telefone'/>
                        </Grid>
                        <Grid item xs='auto'> {/* enviar */}
                            <Button variant='contained' color={colors.orange_common}>Enviar</Button>
                        </Grid>
                        <Grid item xs='auto'> {/* icons */}
                            <Grid container spacing={2} direction='column'>
                                <Grid item xs>
                                    <a href='https://www.facebook.com/CefastAerodesign/?locale=pt_BR' target='_blank' rel="noopener noreferrer">                                    
                                        <AiFillFacebook color={colors.white} />
                                    </a>
                                </Grid>
                                <Grid item xs>
                                    <a href='https://www.instagram.com/cefastaerodesign/' target='_blank' rel="noopener noreferrer">
                                        <BsInstagram color={colors.white} />
                                    </a>
                                </Grid>
                                <Grid item xs>
                                    <a href='https://br.linkedin.com/company/cefast-aerodesign' target='_blank' rel="noopener noreferrer">                                    
                                        <BsLinkedin color={colors.white} /> 
                                    </a>
                                </Grid>
                                <Grid item xs>
                                    <a href='https://www.youtube.com/channel/UCcaH33-qxJOOLscglBONCKg' target='_blank' rel="noopener noreferrer">                                    
                                        <BsYoutube color={colors.white} />
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>    
            </Grid>           
        </MailSenderContainer>
    )
}

export { HomeMailSender }