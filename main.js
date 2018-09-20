$(document).ready(function(){


    $(document).on('click', '#generate-code-button', function(){
        console.log("document was clicked");

        $('#generated-code').empty();


        let desc = $('#short-desc').val();
        // console.log(desc);

        let thingsToKnowBolded = $('#things-to-know-bolded').val().replace(/\n/g, '<br/>');
        // console.log(thingsToKnowBolded);

        let thingsToKnowGeneral = $('#things-to-know-general').val().replace(/\n/g, '<br/>');
        // console.log(thingsToKnowGeneral);
 
        let code = 
        `<table style="height: 500px;" width="100%">
        <tbody>
        <tr style="height: 3px;">
        <td style="height: 3px; background-color: white;">&nbsp;</td>
        </tr>
        <tr style="height: 30px;">
        <td style="height: 30px; background-color: white;"><span style="font-size: 12px;"><strong>${desc}</strong></span></td>
        </tr>
        <tr style="height: 10px;">
        <td style="height: 10px; background-color: white; font-weight: bold; color: white;">&nbsp;</td>
        </tr>
        <tr style="height: 25px;">
        <td style="height: 25px; color: deepskyblue; display: table-cell; vertical-align: middle; font-weight: bold; text-align: center;">
        <h1>THINGS TO KNOW ABOUT YOUR EVENT</h1>
        </td>
        </tr>
        <tr style="height: 234px;">
        <td style="height: 234px; vertical-align: top; color: orange; font-size: 15px;">
        <p><strong><span style="color: #ffa500; font-size: 15px;">${thingsToKnowBolded}</span></strong></p>
        <p><span style="color: #ffa500; font-size: 15px;>${thingsToKnowGeneral}</span></p>
        </td>
        </tr>
        <tr style="height: 125px;">
        <td style="height: 125px;">
        <p class="p1">This ticket is a revocable license, subject to termination with denial of admission at Modernism Week&rsquo;s or its agents&rsquo; discretion upon refund of the purchase price, and subject to revocation with denial of admission or removal from the venue, without compensation, should the holder act in a manner deemed disorderly by Modernism Week or its agents or otherwise violate applicable rules or regulations. Additionally, ticket holder is subject to any and all terms related to purchasing tickets and attendance at the event, including without limitation any terms and conditions maintained at ModernismWeek.com and any event venue terms and conditions. Ticket holder voluntarily assumes all risk and danger incidental to the event, whether occurring prior to, during, or after the actual event, and assumes all responsibility in case of injury or personal loss and releases Modernism Week, event venue and each of their agents, employees, volunteers, and officers from all related claims. Modernism Week and the venue are not responsible for the loss, damage or theft of personal property. Tickets obtained from unauthorized sources may be lost, stolen, or counterfeit and if so are VOID. Purchase from or resale by unauthorized sources may invalidate the ticket. This ticket cannot be replaced if lost, destroyed, or stolen. Ticket is not redeemable for cash. No refunds or exchanges except as may be allowed in Modernism Week&rsquo;s sole and absolute discretion. This ticket may not be used in connection with any promotional or sales program without the express written consent of the Modernism Week. All persons, regardless of age, must have a ticket for admission. Holder irrevocably consents and grants to Modernism Week the right to use ticket holder&rsquo;s image or likeness incidental to any live or recorded audio/video display or transmission or reproduction of the event to which this ticket grants admission, worldwide, in any medium now known or later developed and for any purpose. Tax and surcharge included when applicable. The service charge paid on this ticket is non-refundable. Date, programs, and events subject to change.</p>
        </td>
        </tr>
        </tbody>
        </table>
        `;

        document.getElementById('generated-code').value = code;


    })

})