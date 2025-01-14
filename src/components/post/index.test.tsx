import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import { Post } from 'components';

describe('test post component', () => {
    const component = (
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                    <Post
                        id={1}
                        title='sunt aut facere repellat'
                        author='http://test.com'
                        body='quia et suscipit nsuscipit recusandae consequuntur ex'
                        comments={[]}
                    />
                </BrowserRouter>
            </SnackbarProvider>
        </Provider>
    );

    beforeEach(() => {
        render(component);
    });

    test('post exist', () => {
        expect(screen.getByAltText('...')).toBeInTheDocument();
    });

    test('post title and author', () => {
        expect(screen.getByTestId('post-title')).toHaveTextContent('sunt aut facere repellathttp://test.com')
    });

    test('post body', () => {
        expect(screen.getByTestId('post-body')).toHaveTextContent('quia et suscipit nsuscipit recusandae consequuntur ex')
    });
});