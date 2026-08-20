import { ch1 } from './ch1'
import { ch2 } from './ch2'
import { ch3 } from './ch3'
import { ch4 } from './ch4'
import { ch5 } from './ch5'
import { ch6 } from './ch6'
import { ch7 } from './ch7'
import { ch8 } from './ch8'
import { ch9 } from './ch9'
import { ch10 } from './ch10'
import { ch11 } from './ch11'
import { ch12 } from './ch12'
import { ch13 } from './ch13'
import { ch14 } from './ch14'
import { ch15 } from './ch15'
import { ch16 } from './ch16'
import { ch17 } from './ch17'
import { ch18 } from './ch18'
import { ch19 } from './ch19'
import { ch20 } from './ch20'
import { ch21 } from './ch21'
import { ch22 } from './ch22'
import { ch23 } from './ch23'
import { ch24 } from './ch24'
import { ch25 } from './ch25'
import { ch26 } from './ch26'
import { ch27 } from './ch27'
import { ch28 } from './ch28'
import { r0 } from './r0'
import { r1 } from './r1'
import { r2 } from './r2'
import { r3 } from './r3'
import { r4 } from './r4'
import { r5 } from './r5'
import { r6 } from './r6'
import { r7 } from './r7'
import { r8 } from './r8'
import { r9 } from './r9'
import { r10 } from './r10'
import { r11 } from './r11'
import { r12 } from './r12'
import { r13 } from './r13'
import { r14 } from './r14'
import { r15 } from './r15'
import { r16 } from './r16'
import { r17 } from './r17'
import { r18 } from './r18'
import { r19 } from './r19'
import { r20 } from './r20'
import { r21 } from './r21'
import { r22 } from './r22'
import { r23 } from './r23'
import { r24 } from './r24'
import { r25 } from './r25'
import { r26 } from './r26'
import { r27 } from './r27'
import { r28 } from './r28'
import { r29 } from './r29'
import { r30 } from './r30'

const contentByChapter = {
  ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10,
  ch11, ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19, ch20,
  ch21, ch22, ch23, ch24, ch25, ch26, ch27, ch28,
  r0,
  r1, r2, r3, r4, r5, r6, r7, r8, r9, r10,
  r11, r12, r13, r14, r15, r16, r17, r18, r19, r20,
  r21, r22, r23, r24, r25, r26, r27, r28, r29, r30,
}

export function getLessonContent(chapterId, lessonId) {
  const chapterContent = contentByChapter[chapterId]
  if (!chapterContent) return null
  return chapterContent[lessonId] || null
}
