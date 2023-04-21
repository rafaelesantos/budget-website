import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Termos de uso e política de privacidade">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
          Ao baixar, instalar e usar o Budget, você concorda com os termos deste contrato. Se você não concorda com esses termos, não use o Budget.
          </p>
          <br />
          <strong>
          1. Licença de Uso
          </strong>
          <br />
          A empresa concede ao usuário uma licença limitada e não exclusiva para usar o Budget em dispositivos Apple, como um Mac, iPad ou iPhone,
           para fins pessoais e comerciais. A licença de uso é restrita à versão do aplicativo que o usuário adquire mediante pagamento de taxa mensal (“Budget Pro”).
           <br />
           <br />
           <strong>2. Termos de uso</strong>
           <br />
O Aplicativo tem como finalidade auxiliar o usuário a organizar e planejar suas finanças. A assinatura Budget Pro dá acesso a funcionalidades adicionais que não estão disponíveis para usuários gratuitos.
<br />
<br />
O usuário concorda em usar o Budget de forma responsável e de acordo com a legislação aplicável. O usuário é responsável por manter a confidencialidade da sua senha de acesso ao iCloud e por todas as atividades que ocorrem em sua conta.
<br />
<br />
<strong>3. Política de Privacidade</strong>
<br />
O Budget não coleta nem trata os dados informados pelo usuário em outros serviços. O Budget faz uso do iCloud do usuário para armazenar e sincronizar os dados financeiros do usuário entre dispositivos.
<br />
<br />
A empresa não compartilha informações pessoais do usuário com terceiros sem o consentimento expresso do usuário, exceto quando exigido por lei ou por ordem judicial.
<br />
<br />
<strong>4. Taxas de Assinatura</strong>
<br />
O usuário concorda em pagar a taxa mensal de assinatura para ter acesso às funcionalidades adicionais do Budget. O valor da taxa de assinatura pode ser alterado pela empresa a qualquer momento, mediante aviso prévio ao usuário.
<br />
<br />
<strong>5. Rescisão</strong>
<br />
O usuário pode cancelar sua assinatura Budget Pro a qualquer momento, mas não haverá reembolso para o período de assinatura já pago. A empresa pode rescindir este Contrato a qualquer momento, sem aviso prévio, se o usuário violar os termos deste contrato.
<br />
<br />
<strong>6. Modificações</strong>
<br />
A empresa reserva-se o direito de modificar este contrato a qualquer momento. Tais modificações entrarão em vigor imediatamente após a publicação das mesmas. O uso continuado do Budget após a publicação de modificações constituirá aceitação do usuário a essas modificações.
<br />
<br />
<strong>7. Lei Aplicável</strong>
<br />
Este contrato será regido e interpretado de acordo com as leis do Brasil.
<br />
<br />
<strong>8. Disposições Gerais</strong>
<br />
Este contrato constitui o acordo completo entre o usuário e a empresa com relação ao uso do Budget. Se qualquer disposição deste contrato for considerada inválida ou inexequível, as disposições restantes permanecerão em pleno vigor e efeito. Qualquer renúncia a qualquer disposição deste contrato só será efetiva se por escrito e assinada pela empresa.
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
