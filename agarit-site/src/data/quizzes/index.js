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
import { r1Quiz } from './r1'
import { r2Quiz } from './r2'
import { r3Quiz } from './r3'
import { r4Quiz } from './r4'
import { r5Quiz } from './r5'
import { r6Quiz } from './r6'
import { r7Quiz } from './r7'
import { r8Quiz } from './r8'
import { r9Quiz } from './r9'
import { r10Quiz } from './r10'
import { r11Quiz } from './r11'
import { r12Quiz } from './r12'
import { r13Quiz } from './r13'
import { r14Quiz } from './r14'
import { r15Quiz } from './r15'
import { r16Quiz } from './r16'
import { r17Quiz } from './r17'
import { r18Quiz } from './r18'
import { r19Quiz } from './r19'
import { r20Quiz } from './r20'
import { r21Quiz } from './r21'
import { r22Quiz } from './r22'
import { r23Quiz } from './r23'
import { r24Quiz } from './r24'
import { r25Quiz } from './r25'
import { r26Quiz } from './r26'
import { r27Quiz } from './r27'
import { r28Quiz } from './r28'
import { r29Quiz } from './r29'
import { r30Quiz } from './r30'

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
  r1: r1Quiz,
  r2: r2Quiz,
  r3: r3Quiz,
  r4: r4Quiz,
  r5: r5Quiz,
  r6: r6Quiz,
  r7: r7Quiz,
  r8: r8Quiz,
  r9: r9Quiz,
  r10: r10Quiz,
  r11: r11Quiz,
  r12: r12Quiz,
  r13: r13Quiz,
  r14: r14Quiz,
  r15: r15Quiz,
  r16: r16Quiz,
  r17: r17Quiz,
  r18: r18Quiz,
  r19: r19Quiz,
  r20: r20Quiz,
  r21: r21Quiz,
  r22: r22Quiz,
  r23: r23Quiz,
  r24: r24Quiz,
  r25: r25Quiz,
  r26: r26Quiz,
  r27: r27Quiz,
  r28: r28Quiz,
  r29: r29Quiz,
  r30: r30Quiz,
}

export function getChapterQuiz(chapterId) {
  return quizzesByChapter[chapterId] || null
}
