const fs = require('node:fs')


const app = {
    title: 'Yip Gambling Calculator',
    author: 'Branacleboy',
    version: '0.1v',
}


console.time(app.title)


const wager             = Math.abs(5)
const payoutRatio       = 3 / 2
const wagerMultiplyer   = 2


const entries = normalizeEntries(fs.readFileSync(`./${process.argv[2]}`, 'utf-8'))


/**
 * { function_description }
 *
 * @param      {string}  value   The value
 * @return     {<type>}  { description_of_the_return_value }
 */
function isEmpty(value) {
    const testType = typeof value

    const isArray  = Array.isArray(value)
    const isString = typeof value === 'string'

    if (!isArray && !isString) { return null }

    if (isString) {
        value = value.trim()
    }

    return value.length === 0
}


/**
 * { function_description }
 *
 * @param      {<type>}  content  The content
 */
function normalizeEntries(content) {
    return content
        .split('\n')
        .map(el => {

            el = el.trim()

            if (el.startsWith('//') || isEmpty(el)) { return false }

            return el
                .split(',')
                .map(el => Number(el ?? 0))
        })
        .filter(el => !!el)
}


/**
 * { function_description }
 *
 * @param      {<type>}  entries  The entries
 * @return     {<type>}  { description_of_the_return_value }
 */
function yip(entries) {

    const stats = {
        wins: 0,
        losses: 0,
        doubled: 0,
        payout: 0,
        rounds: 0,
        sevens: 0,
        twelves: 0,
    }

    for (var i = entries.length - 1; i >= 0; i--) {

        const el = entries[i]

        const [ wager, a, b, c ] = el


        const round         = {}
        const sum           = [a, b, c ?? 0].reduce((a, b) => a + b)
        const multiplier    = !!c ? wagerMultiplyer : 1

        console.log({ wager, a, b, c, sum })

        round.wager         = wager * multiplier
        round.score         = sum
        round.win           = sum === 7 || sum === 12
        round.payout        = round.win
            ? round.wager + (round.wager * payoutRatio)
            : round.wager * -1

        // tabulate stats
        stats.rounds += 1

        if (round.win) {
            stats.wins += 1
        } else  {
            stats.losses += 1
        }

        stats.sevens    += Number(round.score === 7)
        stats.twelves   += Number(round.score === 12)

        stats.doubled   += Number(multiplier !== 1)
        stats.payout    += round.payout
    }

    return stats
}

const stats = yip(entries)

console.timeEnd(app.title)

console.log(`
author:  ${app.author}
version: ${app.version}
----
Rounds:  ${stats.rounds}
Wins:    ${stats.wins}
Losses:  ${stats.losses}
Doubled: ${stats.doubled}
7s:      ${stats.sevens}
12s:     ${stats.twelves}
---------------------------
Payout: $${stats.payout}
`)

