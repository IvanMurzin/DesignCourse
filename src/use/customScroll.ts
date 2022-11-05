export function useCustomScroll(to: number, ms: number, callback?: Function) {
  let pos = window.pageYOffset
  if (pos) {
    const interval = 7 //~144fps

    const frame = (interval * (to - pos)) / ms--

    const scrollInterval = setInterval(() => window.scrollTo(0, (pos += frame)), interval)
    setTimeout(() => {
      clearInterval(scrollInterval)
      window.scrollTo(0, 0)
      if (callback) callback()
    }, ms)
  } else if (callback) callback()
}
