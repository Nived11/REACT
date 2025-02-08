const withLoader=(WrappedComponent)=>{

    return function withLoaderComponent({isLoading,...props}){
        if(isLoading){
            return <div>Loading...</div>
        }
        return <WrappedComponent {...props} />
    }
}

export default withLoader;