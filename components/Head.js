import React from 'react'
import NextHead from 'next/head'

export default function Head({ title, description }) {
	return (
		<NextHead>
			<meta charSet='UTF-8' />
			<title>{title || ''}</title>
			<meta name='description' content={description || ''} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
		</NextHead>
	)	
}