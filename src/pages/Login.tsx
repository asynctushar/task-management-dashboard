import { useState, type SubmitEvent } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateEmail } from '@/lib/validations';
import { useAuth } from '@/context/auth/useAuth';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

const Login = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { loading, login } = useAuth();

    const validateForm = () => {
        const newErrors = { email: '', password: '' };
        let isValid = true;

        // Email
        if (!email.trim()) {
            newErrors.email = 'Email address is required';
            isValid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        } else if (email.length > 50) {
            newErrors.email = 'Email address cannot exceed 50 characters';
            isValid = false;
        }

        // Password
        if (!password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const loginHandler = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await login(email, password);
            toast.success("Login success.");
            navigate("/");

        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.error);
            } else if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong.");
            }
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-muted/30">
            <div className="w-full max-w-md">
                <div className="bg-background border rounded-lg shadow-sm p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
                        <p className="text-muted-foreground mt-2">Login to your Donezo account</p>
                    </div>

                    <form onSubmit={loginHandler} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors({ ...errors, email: '' });
                                    }}
                                    className="pl-10"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-sm text-destructive">{errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={isPasswordHidden ? "password" : "text"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors({ ...errors, password: '' });
                                    }}
                                    className="pl-10 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                >
                                    {isPasswordHidden ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-sm text-destructive">{errors.password}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;