export default async function Logo({ name }: { name: string }) {
	const reName = name[0].toUpperCase() + name.slice(1) + 'Logo'
	const res = await import(`@/data/svgs/${reName}.svg`)
	const Logo = res.default
	return <Logo />
}
