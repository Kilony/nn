function calculateExperience() {
    const characterLevel = parseInt(document.getElementById('characterLevel').value);
    const enemyDanger = parseInt(document.getElementById('enemyDanger').value);

    if (isNaN(characterLevel) || isNaN(enemyDanger)) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    const experience = calculateExperienceFormula(characterLevel, enemyDanger);
    document.getElementById('experience').textContent = experience;
}

function calculateExperienceFormula(characterLevel, enemyDanger) {
    const baseExperience = 100; // Базовый опыт за победу (может быть любым числом)

    // Формула для расчета опыта
    const experience = baseExperience * characterLevel * enemyDanger;

    return experience;
}
