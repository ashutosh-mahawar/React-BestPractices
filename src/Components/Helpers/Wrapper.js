// this is done to avoid div soup. This wrapper component doesn't get rendered while running the project.
// We can also use <> </> or react.fragment. These are used to avoid unnecessary htlm elemnts on rendered page.

const Wrapper = props => {
    return props.children;
};

export default Wrapper;