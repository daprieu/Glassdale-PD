export const Witnesses = (witnesses) => {
    return `
    <div class="Witnesses">
        <p class="name">${witnesses.name}</p>
        <p class="statement">Statement: ${witnesses.statements}</p>
    </div>
    `
}
