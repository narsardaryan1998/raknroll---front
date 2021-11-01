export default function ({ redirect, store, params }) {
  if (store.state.auth.user.slug !== params.slug) {
    return redirect('/')
  }
}
