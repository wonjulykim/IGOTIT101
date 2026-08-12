import { ch1Quiz } from './ch1'
import { ch2Quiz } from './ch2'
import { ch3Quiz } from './ch3'
import { ch4Quiz } from './ch4'
import { ch5Quiz } from './ch5'
import { ch6Quiz } from './ch6'
import { ch7Quiz } from './ch7'
import { ch8Quiz } from './ch8'
import { ch9Quiz } from './ch9'
import { ch10Quiz } from './ch10'
import { ch11Quiz } from './ch11'
import { ch12Quiz } from './ch12'
import { ch13Quiz } from './ch13'
import { ch14Quiz } from './ch14'
import { ch15Quiz } from './ch15'
import { ch16Quiz } from './ch16'
import { ch17Quiz } from './ch17'
import { ch18Quiz } from './ch18'
import { ch19Quiz } from './ch19'
import { ch20Quiz } from './ch20'
import { ch21Quiz } from './ch21'
import { ch22Quiz } from './ch22'
import { ch23Quiz } from './ch23'
import { ch24Quiz } from './ch24'
import { ch25Quiz } from './ch25'
import { ch26Quiz } from './ch26'
import { ch27Quiz } from './ch27'
import { ch28Quiz } from './ch28'

export const quizzesByChapter = {
  ch1: ch1Quiz,
  ch2: ch2Quiz,
  ch3: ch3Quiz,
  ch4: ch4Quiz,
  ch5: ch5Quiz,
  ch6: ch6Quiz,
  ch7: ch7Quiz,
  ch8: ch8Quiz,
  ch9: ch9Quiz,
  ch10: ch10Quiz,
  ch11: ch11Quiz,
  ch12: ch12Quiz,
  ch13: ch13Quiz,
  ch14: ch14Quiz,
  ch15: ch15Quiz,
  ch16: ch16Quiz,
  ch17: ch17Quiz,
  ch18: ch18Quiz,
  ch19: ch19Quiz,
  ch20: ch20Quiz,
  ch21: ch21Quiz,
  ch22: ch22Quiz,
  ch23: ch23Quiz,
  ch24: ch24Quiz,
  ch25: ch25Quiz,
  ch26: ch26Quiz,
  ch27: ch27Quiz,
  ch28: ch28Quiz,
}

export function getChapterQuiz(chapterId) {
  return quizzesByChapter[chapterId] || null
}
