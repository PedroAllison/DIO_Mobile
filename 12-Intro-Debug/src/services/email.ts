async function getBaseEmail(senderName:string): Promise<string> {
    let base = await getHeaderText()

    base += `Ola ${senderName}, esta tudo bem?`
    
    base += "\n moro em Portugal"

    return base
}

async function getHeaderText(): Promise<string> {
    return "Email pra ti "
}

export {getBaseEmail}