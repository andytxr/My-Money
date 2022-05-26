import React, { Component } from "react";

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import TabHeader from '../common/tab/tabHeader';
import TabsHeader from "../common/tab/tabsHeader";
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";

class BillingCycles extends Component{

    render(){

        return(

            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro"></ContentHeader>
                <Content>

                    <Tabs>
                        <TabsHeader>    
                            <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'></TabHeader>
                        </TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>

                </Content>
            </div>


        )

    }

}

export default BillingCycles