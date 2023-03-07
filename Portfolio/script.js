const analise = document.querySelector('.analise');
const textoOriginalAnalise = analise.innerHTML;

analise.addEventListener('mouseover', () => {
  analise.innerHTML  = 'As Análises contábeis consiste em garantir a integridade financeira de uma empresa, eliminar os pontos fracos e ineficiências no processo de reconciliação que muitas vezes levam a erros no balanço patrimonial e imprecisões no fechamento do exercício.'+ 
        '<br>O objetivo é alocar corretamente as despesas, identificando seu grupo e contabilizando de forma correta para apuração de resultado.';
});

analise.addEventListener('mouseout', () => {
  analise.innerHTML = textoOriginalAnalise;
});


const ativo = document.querySelector('.ativo');
const textoOriginalAtivo = ativo.innerHTML;

ativo.addEventListener('mouseover', () => {
    ativo.innerHTML  = 'O controle do ativo imobilizado é o processo de conhecimento e monitoramento do patrimônio de uma empresa.' +
        ' Um bom controle dos ativos pode reduzir o número de furtos e desvios de bens.' +
        '<br>Ter conhecimento sobre o valor patrimonial da empresa garante que ela estará preparada para operações que podem ocorrer futuramente, como fusões, aquisições, cisões, entre outras.'+
        '<br>Ao cumprir uma exigência fiscal, a empresa que realiza o controle do ativo imobilizado facilita os questionamentos de auditorias internas e independentes, bancos, exigências licitatórias, entre outros.';
});

ativo.addEventListener('mouseout', () => {
    ativo.innerHTML  = textoOriginalAtivo;
});


const controles = document.querySelector('.controles');
const textoOriginalControles = controles.innerHTML;

controles.addEventListener('mouseover', () => {
    controles.innerHTML  = 'Os controles internos são essenciais a todas as empresas, pois garantem um ambiente de trabalho seguro e eficaz.' +
        '<br>Tem como objetivo obter melhorias no ambiente de trabalho, tornando os processos mais eficazes e eficientes.' +
        '<br>Atualmente ocorrem muito erros, fraudes e falhas nas Empresas que podem ocasionar problemas futuros.' +
        '<br>Com o avanço tecnológico e a competitividade, é necessário que o Controle Interno esteja aprimorado, evitando ociosidade e Ineficiência nos processos.';
});

controles.addEventListener('mouseout', () => {
    controles.innerHTML  = textoOriginalControles;
});


const auditoria = document.querySelector('.auditoria');
const textoOriginalAuditoria = auditoria.innerHTML;

auditoria.addEventListener('mouseover', () => {
    auditoria.innerHTML  = 'Auditoria é um conjunto de procedimentos que tem por objetivo examinar e adequar a eficácia dos Controles, e também uma revisão das operações das empresas, para verificar se ela enquadra as normas pertinentes.' +
    '<br>A auditoria trabalha na identificação de irregularidades nos processos em uma organização.' +
    '<br>Essa identificação é fundamental para que a empresa consiga melhorar seus processos e por consequência agregar qualidade ao seu produto, confiabilidade a sua marca e credibilidade com seus clientes.';
});

auditoria.addEventListener('mouseout', () => {
    auditoria.innerHTML  = textoOriginalAuditoria;
});


const consultoria = document.querySelector('.consultoria');
const textoOriginalConsultoria = consultoria.innerHTML;

consultoria.addEventListener('mouseover', () => {
    consultoria.innerHTML  = 'Estamos aqui para resolver problemas críticos que sua empresa possa estar enfrentando com a equipe. Nossa abordagem única não é apenas o que nos diferencia, mas também o atendimento adaptável para cada situação.' +
    '<br>Oferecemos uma ampla gama de serviços de consultoria  em Recursos Humanos e Departamento Pessoal para te  atender.' +
    '<br>Seja você um pequeno negócio local ou uma multinacional, nós te ajudaremos à alcançar novos níveis de sucesso.' +
    '<br><br>Entre em contato para saber mais sobre nossos serviços e o que podemos fazer pela sua empresa.';
});

consultoria.addEventListener('mouseout', () => {
    consultoria.innerHTML  = textoOriginalConsultoria;
});



const abertura = document.querySelector('.abertura');
const textoOriginalAbertura = abertura.innerHTML;

abertura.addEventListener('mouseover', () => {
    abertura.innerHTML  = 'A escolha do modelo tributário ideal é primordial para a empresa.' +   
    '<br>Dessa forma, ela desenvolverá suas atividades de forma plena e sem sofrer grandes perdas devido ao pagamento de impostos.' +
    '<br>Como se sabe, atualmente o Brasil possui uma elevada carga tributária (uma das mais altas do mundo) e diante da complexidade o contador é um profissional que pode oferecer soluções para sua empresa quanto a questões tributárias, trabalhistas e contábeis, sempre buscando eficiência e inovação para sua empresa.';
});

abertura.addEventListener('mouseout', () => {
    abertura.innerHTML  = textoOriginalAbertura;
});


const imposto = document.querySelector('.imposto');
const textoOriginalImposto = imposto.innerHTML;

imposto.addEventListener('mouseover', () => {
    imposto.innerHTML  = 'Contar com a experiência de um contador pode ser a melhor alternativa para evitar problemas com o Leão.' +
    '<br>Na maioria das vezes, por falta de conhecimento ou até mesmo atenção, algumas pessoas acabam caindo na temida "malha fina", e o papel do contador é justamente evitar que isso aconteça.' +
    'Mesmo as declarações mais simples, que possuem poucas informações, podem ter detalhes que não são conhecidos pelo contribuinte. Para declarações mais complexas, com diversas fontes de renda e dependentes, por exemplo, o contador tem conhecimento de preencher de forma correta, minimizando o risco da ‘’malha fina’’ e bloqueio do CPF.' +
    '<br>A Receita Federal destaca alguns erros frequentes cometidos por contribuintes no preenchimento da Declaração de Ajuste Anual do Imposto sobre a Renda da Pessoa Física (DIRPF) e os modos de regularizar a situação.' +
    '<ul>'+
        '<li>Omissão de rendimentos do titular, em especial de uma segunda fonte, tais como honorários, aluguéis, aposentadoria/pensão e palestras.</li>' +
        '<li>Omissão de rendimentos de dependente.</li>' +
        '<li>Informação de valor de IRF maior do que o que consta na declaração do empregador.</li>' +
        '<li>Dependentes que não preenchem as condições, em especial por contarem de outra declaração ou terem apresentado declaração em seu nome.</li>' +
        '<li>Despesas médicas não realizadas, de titular e de dependentes e ainda de não dependentes relativas a consultas, Planos de Saúde e Clínicas.</li>' +
        '<li>Contribuições de empregadas domésticas não realizadas.</li>' +
    '</ul>' +
    '<br>Para que esses erros não aconteça declare seu imposto de renda conosco, fala seu orçamento.';
});

imposto.addEventListener('mouseout', () => {
    imposto.innerHTML  = textoOriginalImposto;
});



const estoque = document.querySelector('.estoque');
const textoOriginalEstoque = estoque.innerHTML;

estoque.addEventListener('mouseover', () => {
    estoque.innerHTML  = 'A gestão de estoques é um fator preponderante para o sucesso ou fracasso de uma empresa. O inventário é a atividade em que se realiza contagem, conferência e listagem dos produtos que são armazenados no estoque, para analisarem os resultados, fazendo a comparação com relação as quantidades informadas no sistema da empresa.' +
    '<br>O inventário é importante para se obter redução de desperdícios, evitar e identificar extravios, furtos ou controle de produtos obsoletos, ou seja, produtos ultrapassados.' +
    '<br>Os controles adequados e os indicadores da situação dos estoques são ferramentas indispensáveis para que os administradores façam boa gestão deste ativo e consigam obter vantagem competitiva. O estoque tem um papel importante para o sucesso do negócio, ainda mais em época de crise.' +
    '<br>Para um bom indicador de giro do estoque, é de extrema importância que  a empresa saiba a situação atual de seu estoque, pois isso irá refletir na compra de novos produtos e no comportamento de compra de seus clientes. Uma boa gestão de estoque passa por equilibrar compras, armazenagem e entregas, controlando as entradas e o consumo de materiais, movimentando o ciclo da mercadoria.' +
    '<br>Além disso, deve ter como objetivo um prazo de pagamento dos fornecedores compatível com os recebimentos dos clientes.' +
    '<br>Para saber mais, entre em contato de como posso te ajudar.';
});

estoque.addEventListener('mouseout', () => {
    estoque.innerHTML  = textoOriginalEstoque;
});




$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    var typed = new Typed(".typing", {
        strings:["Assessoria Contábil", "Fiscal", "Gestão Doméstica","Recursos Humanos"],
        typedSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings:["Analísta Contábil", "Consultor", "Auditor"],
        typedSpeed:100,
        backSpeed:60,
        loop:true
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});





