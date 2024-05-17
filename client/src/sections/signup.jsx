import { useState } from "react";
import { Container } from "../components/container";
import { FadeIn } from "../components/fade-in";
import { Button } from "../components/button";
import {IconButton,FilledInput,FormControl,InputAdornment,TextField} from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material';


export const SignUp = () => {
  //show password
  const [showPassword,setShowPassword] = useState (false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
//mouse event
const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
  return (
    <>
     <Container className="relative z-10  flex flex-row align-center justify-center space-y-12 py-36 text-2xl font-bold text-white md:text-4xl">
     <FadeIn>
       <p className="text-center">Didn&apos;t have account with us?</p>
                  <div>

                     <p className="text-[#a1a1a6] text-xl p-4">
                        E-Mail
                     </p>
                     <TextField
                        fullWidth 
                        required
                        type="email" id="email" name="email" 
                        // onChange={updateData}
                        sx={{ backgroundColor:'white',borderRadius:'13px', marginBottom:'2%' }}
                      />

                     <p className="text-[#a1a1a6] text-xl p-4">
                        Password
                     </p>
                     <FormControl 
                     fullWidth  
                     required 
                     sx={{ backgroundColor:'white',borderRadius:'13px',marginBottom:'10%' }}>
                            <FilledInput
                              id="password"
                              // onChange={updateData}
                              type={showPassword ? 'text' : 'password'}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                  style={{ color: 'black' }} 
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                      </FormControl>
                   
                  </div>
                  <div className="flex align-center justify-center">
                  <Button size='medium'> Sign Up </Button> 
                  </div>
                  
     </FadeIn>
   </Container>
    </>
    
  );
};
