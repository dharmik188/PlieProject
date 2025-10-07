import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    ScrollView,
    SafeAreaView,
    Image, // Use SafeAreaView for better layout on notched devices
} from 'react-native';
import Google from '../assets/Images/Google.png';
import Facebook from '../assets/Images/Facebook.png';
import Apple from '../assets/Images/Apple.png';
import Icon from 'react-native-vector-icons/FontAwesome'; // You'd need to install react-native-vector-icons
import axios from 'axios';
// import { setUsername, setPassword } from '../Redux/Slices/logSlice';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/Slices/logSlice';

const { height } = Dimensions.get('window');

const GoogleIcon = () => (
    <View>
        <Image
            source={Google}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
        />
    </View>
);
const AppleIcon = () => (
    <View>
        <Image
            source={Apple}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
        />
    </View>
);
const FacebookIcon = () => (
    <View>
        <Image
            source={Facebook}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
        />
    </View>
);

const LoginScreen = ({ navigation }) => {
    // const dispatch = useDispatch();
    const dispatch = useDispatch();
  const user = useSelector(state => state.user);
    const [email, setEmail] = useState(user.username || ''); 
    const [password, setPassword] = useState(user.password || '');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

     const handleSignIn = async () => {
        if (!email || !password) {
            console.log("Email and password are required.");
            return;
        }

        setIsLoading(true);
        console.log('Attempting sign in for:', email);

        try {
            const response = await axios.post(
                'http://3.7.81.243/projects/plie-api/public/api/login',
                {
                    email: email,
                    password: password,
                }
            );

            if (response.data.success) {
                console.log('Login successful!', response.data);

                // ✅ Save login data to Redux
                dispatch(login({ username: email, password }));

                // Navigate to EventListing
                navigation.navigate('EventListing');
            } else {
                console.log('Login failed:', response.data.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Sign-in error:', error.response?.data || error.message);
        } finally {
            setIsLoading(false);
        }
    };


    const handleSignUp = () => {
        console.log('Navigating to Sign Up screen');
    };

    const handleForgotPassword = () => {
        console.log('Navigating to Forgot Password screen');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.topSection}>
                    <Text style={styles.appName}>Pliē</Text>
                    <View style={styles.imagePlaceholder}>
                        <Icon name="image" size={60} color="#999" />
                    </View>
                </View>

                <View style={styles.bottomSection}>

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="email@email.com"
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            // dispatch(setUsername(text));
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        editable={!isLoading}
                    />

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text);
                                // dispatch(setPassword(text));
                            }}
                            secureTextEntry={!showPassword}
                            editable={!isLoading}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.eyeIcon}
                            disabled={isLoading}
                        >
                            <Icon
                                name={showPassword ? 'eye-slash' : 'eye'}
                                size={20}
                                color="#888"
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={handleForgotPassword}
                        style={styles.forgotPasswordLink}
                        disabled={isLoading}
                    >
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signInButton} onPress={handleSignIn} disabled={isLoading}>
                        <Text style={styles.signInButtonText}>
                            Sign In
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Not a member? </Text>
                        <TouchableOpacity onPress={handleSignUp} disabled={isLoading}>
                            <Text style={styles.signUpLinkText}>Sign Up Here</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dividerContainer}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>or Sign In with:</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    <View style={styles.socialIconsContainer}>
                        <TouchableOpacity disabled={isLoading}><GoogleIcon /></TouchableOpacity>
                        <TouchableOpacity disabled={isLoading}><AppleIcon /></TouchableOpacity>
                        <TouchableOpacity disabled={isLoading}><FacebookIcon /></TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.guestEntry} onPress={() => { }} disabled={isLoading}>
                    <Text style={styles.guestText}>Enter as Guest</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

// --- Stylesheet ---
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
    },

    topSection: {
        height: height * 0.31,
        backgroundColor: '#EBEBEB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    appName: {
        fontSize: 48,
        fontWeight: '300',
        marginBottom: 20,
        letterSpacing: 1,
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomSection: {
        paddingHorizontal: 30,
        paddingTop: 25,
        paddingBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        height: 45,
        borderColor: '#EBEBEB',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        borderColor: '#EBEBEB',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 10,
    },
    forgotPasswordLink: {
        alignSelf: 'flex-end',
        marginTop: 5,
        marginBottom: 20,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#888',
    },
    signInButton: {
        backgroundColor: '#38A750',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    signUpText: {
        fontSize: 14,
        color: '#555',
    },
    signUpLinkText: {
        fontSize: 14,
        color: '#38A750',
        fontWeight: 'bold',
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: '#888',
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 10,
    },

    guestEntry: {
        alignSelf: 'flex-end',
        padding: 10,
        marginRight: 20,
        marginBottom: Platform.OS === 'ios' ? 20 : 10,
    },
    guestText: {
        fontSize: 14,
        color: '#888',
    },
});

export default LoginScreen;
