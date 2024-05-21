import * as BreadStyle from '@components/bread';
import { StyleBakery } from '../components/styleBakery';
import { Cafe } from '../components/cafe';

export function StylePage() {
  return (
    <>
      style page
      <h2>css</h2>
      <BreadStyle.Bread1 />
      <h2>module css</h2>
      <BreadStyle.Bread2 />
      <h2>scss</h2>
      <StyleBakery />
      <h2>styled-components</h2>
      <Cafe />
    </>
  )
}