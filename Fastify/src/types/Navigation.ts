export interface Navigation {
    navigate: (routeName: string) => void,
    replace: (routeName: string) => void,
    push : (routeName: string) => void
}