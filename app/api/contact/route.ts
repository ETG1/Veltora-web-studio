import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder_key'
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, package: pkg, message } = body

    const { error } = await supabase
      .from('leads')
      .insert([{ name, email, company, package: pkg, message, created_at: new Date().toISOString() }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
