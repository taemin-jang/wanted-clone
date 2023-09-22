export default async function Logo({ name }: { name: string }) {
	const reName = name[0].toUpperCase() + name.slice(1) + 'Logo'
	const Logo = await import(`@/data/svgs/${reName}.svg`).then(
		(mod) => mod.default,
	)
	return <Logo />
}
