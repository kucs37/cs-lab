export const signInWithEmail = async ({
    email,
    password,
}: {
    email: string
    password: string
}): Promise<{ status: 'success' | 'failed' }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'sornchai.som@ku.th' && password === '1234567') {
                resolve({ status: 'success' })
            } else {
                resolve({ status: 'failed' })
            }
        }, 1000)
    })
}
