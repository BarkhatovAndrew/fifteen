const bannedPatterns = [
  /d[i1]ck/i,
  /f[u*]ck/i,
  /p[u*]ssy/i,
  /c[u*]nt/i,
  /b[i1]tch/i,
  /sh[i1]t/i,
  /ass/i,
  /x[y*i]/i,
  /eb[a*t]/i,
  /bl[y*i][a*t]/i,
  /h[uy*i]/i,
  /p[i1]zd[ao*]/i,
  /eb[a*t]/i,
  /eb[a*][n*][u*][iy*]/i,
  /bl[y*i][a*t]/i,
  /s[o0]s[a*t]/i,
  /[uy]kr[a*][i1][n*][a*]/i,
  /r[o0]s[i1][y*i][a*]/i,
  /h[i1]tler/i,
]

export const containsBannedPatterns = (text: string) => {
  return bannedPatterns.some((pattern) => pattern.test(text))
}
