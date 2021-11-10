<?php

namespace app\models\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\Models\Socketdata;

/**
 * SocketdataSearch represents the model behind the search form of `app\Models\Socketdata`.
 */
class SocketdataSearch extends Socketdata
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['adm', 'content', 'Thename', 'updataTime'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Socketdata::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'adm', $this->adm])
            ->andFilterWhere(['like', 'content', $this->content])
            ->andFilterWhere(['like', 'Thename', $this->Thename])
            ->andFilterWhere(['like', 'updataTime', $this->updataTime]);

        return $dataProvider;
    }
}
