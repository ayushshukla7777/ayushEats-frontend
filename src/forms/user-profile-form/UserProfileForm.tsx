import { z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ButtonLoading } from '@/components/LoadingButton';
import { User } from '@/types/User';

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, { message: 'Name is required' }),
    addressLine1: z.string().min(1, { message: 'AddressLine1 is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    country: z.string().min(1, { message: 'Country is required' }),

})
export type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileData: UserFormData) => void;
    currentUser: User,
    isLoading: boolean;
    title?: string;
    buttonText?: string;
};

function UserProfileForm({
    onSave,
    currentUser,
    isLoading,
    title = "User Profile",
    buttonText = "Submit",
}: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:
            currentUser

    })

    return (
        <div >
            <Form {...form}>
                <form
                    className='flex flex-col space-y-4 bg-gray-50 rounded-lg p-2 md:p-8 '
                    onSubmit={form.handleSubmit(onSave)}>
                    <div>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <FormDescription>
                            View and change your profile information here
                        </FormDescription>
                    </div>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input disabled className='bg-white' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className='bg-white' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex flex-col md:flex-row gap-4'>
                        <FormField
                            control={form.control}
                            name='addressLine1'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormLabel>AddressLine1</FormLabel>
                                    <FormControl>
                                        <Input className='bg-white' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='city'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input className='bg-white' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='country'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input className='bg-white' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {isLoading ? <ButtonLoading />
                        :
                        <Button className='bg-orange-500 ' type='submit'>
                            {buttonText}
                        </Button>}


                </form>
            </Form>
        </div>
    )
}

export default UserProfileForm