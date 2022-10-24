import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

import SelectedNode from 'components/chart/selectedNode';

import type { RTBData } from '@luos-io/sdk-web';
import type { Node } from 'pages/network/interfaces';

const initialPanelWidth = 50;
const initialCanvasWidth =
  typeof window !== 'undefined'
    ? window.innerWidth -
      (window.navigator.platform === 'Win32' ? initialPanelWidth + 20 : initialPanelWidth)
    : 0;
const initialNode: Node = {
  index: -1,
  value: -1,
  luos_value: -1,
  services: [],
};
const setviceType = [
  'void',
  'gate',
  'color',
  'angle',
  'state',
  'distance',
  'voltage',
  'imu',
  'light',
  'load',
  'pipe',
  'motor',
  'servo-motor',
  'inspector',
  'text',
  'unknown',
];
const canvasHeight = typeof window !== 'undefined' ? window.innerHeight - 50 : 0;

const Chart = (rtbData: RTBData): JSX.Element => {
  // const svgRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [canvasWidth, setCanvasWidth] = useState(initialCanvasWidth);
  const [panelWidth, setPanelWidth] = useState(initialPanelWidth);
  const [selectedNode, setSelectedNode] = useState<Node>(initialNode);

  useEffect(() => {
    // const svg = d3.select(svgRef.current);
    const nodes: Node[] = [];

    const links: d3.SimulationLinkDatum<d3.SimulationNodeDatum>[] = [];
    rtbData.nodes.forEach((node) => {
      const firstServiceStatistics = node?.services[0].statistics;
      if (firstServiceStatistics) {
        nodes.push({
          index: node.ID - 1,
          value: firstServiceStatistics.buffer_occupation_ratio / 100,
          luos_value: firstServiceStatistics.luos_stack_ratio / 100,
          services: node.services,
        });

        links.push({
          source: node.ID - 1,
          target: node.ID,
        });
      }
    });
    const xScale = d3
      .scaleLinear()
      .domain([0, nodes.length])
      .range([200, canvasWidth - 200]);

    // Add nodes
    d3.select('.nodes')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${xScale(d.index)}, ${canvasHeight / 2})`);
    // Add node's circles
    d3.selectAll('.node')
      .data(nodes)
      .join('.node')
      .append('circle')
      .attr('class', 'node-circle')
      .attr('r', 45)
      .style('stroke', '#000000')
      .attr('fill', 'white')
      .style('cursor', 'pointer')
      .on('click', function (d, i) {
        onClickNode(i);
      })
      .on('mouseover', function (d, i) {
        onHoverNode(i);
      })
      .on('mouseout', function (d, i) {
        onHoverOutNode(i);
      });
    // #region Loads

    const defaultArcParams = d3.arc().innerRadius(10).outerRadius(40);
    const pies = nodes.map((node) =>
      d3
        .pie()
        // @typescript-eslint/no-explicit-any
        .value((d: any) => d.value)
        .sort(null)
        .sortValues(null)
        .startAngle(0)
        .endAngle(360)
        // @ts-expect-error
        .endAngle(360)([{ value: node.value }, { value: 1 - node.value }])
        // @ts-expect-error
        .map((d) => defaultArcParams(d)),
    );

    // Add load groups
    d3.select('.nodes').selectAll('g').data(nodes).join('g').append('g').attr('class', 'load');
    // Add load paths
    d3.selectAll('.load')
      .data(nodes)
      .join('.load')
      .append('path')
      .attr('class', 'load-path')
      .attr('fill-opacity', 0)
      .style('cursor', 'pointer')
      .on('click', function (d, i) {
        onClickNode(i);
      })
      .on('mouseover', function (d, i) {
        onHoverNode(i);
      })
      .on('mouseout', function (d, i) {
        onHoverOutNode(i);
      })
      .attr('d', (_d, i) => pies[i][1]);
    // Add load pies
    d3.selectAll('.load')
      .data(nodes)
      .join('.load')
      .append('path')
      .attr('class', 'load-value')
      .style('cursor', 'pointer')
      .on('click', function (d, i) {
        onClickNode(i);
      })
      .on('mouseover', function (d, i) {
        onHoverNode(i);
      })
      .on('mouseout', function (d, i) {
        onHoverOutNode(i);
      })
      .attr('fill', () => '#D5D5D5')
      .attr('d', (_d, i) => pies[i][0]);
    // #endregion

    //Add MCU icon
    d3.selectAll('.node')
      .data(nodes)
      .join('.node')
      .append('image')
      .attr('xlink:href', '/assets/images/topology/mcu.svg')
      .style('cursor', 'pointer')
      .on('click', function (d, i) {
        onClickNode(i);
      })
      .on('mouseover', function (d, i) {
        onHoverNode(i);
      })
      .on('mouseout', function (d, i) {
        onHoverOutNode(i);
      })
      .text((d) => d.index)
      .attr('x', -14)
      .attr('y', -14);
    // Add node's text
    d3.selectAll('.node')
      .data(nodes)
      .join('.node')
      .append('text')
      .style('fill', 'white')
      .style('cursor', 'pointer')
      .on('click', function (d, i) {
        onClickNode(i);
      })
      .on('mouseover', function (d, i) {
        onHoverNode(i);
      })
      .on('mouseout', function (d, i) {
        onHoverOutNode(i);
      })
      .text((d) => d.index + 1)
      .attr('x', -5)
      .attr('y', 5);

    // //Add first service alias
    // d3.selectAll('.node')
    //   .data(nodes)
    //   .join('.node')
    //   .append('text')
    //   .style('fill', 'black')
    //   .style('font-size', '11px')
    //   .style('cursor', 'pointer')
    //   .text((d) => d.services[0].alias)
    //   .attr('x', -95)
    //   .attr('y', 65);

    // // ADD number of services
    // d3.selectAll('.node')
    //   .data(nodes)
    //   .join('.node')
    //   .append('text')
    //   .style('fill', 'black')
    //   .style('font-size', '11px')
    //   .style('cursor', 'pointer')
    //   .text((d) => 'Total Srvs: ' + d.services.length)
    //   .attr('x', -95)
    //   .attr('y', 80);

    // Add memory usage
    d3.selectAll('.node')
      .data(nodes)
      .join('.node')
      .append('text')
      .style('fill', 'black')
      .style('font-size', '9px')
      .attr('class', 'memory-usage')
      .style('cursor', 'pointer')
      .on('click', function (d, i) {
        onClickNode(i);
      })
      .on('mouseover', function (d, i) {
        onHoverNode(i);
      })
      .on('mouseout', function (d, i) {
        onHoverOutNode(i);
      })
      .text((d) => Math.round(d.value * 100) + '%')
      .attr('x', 18)
      .attr('y', 5);

    const listNodes = d3.selectAll('.node').data(nodes).join('.node');

    listNodes.nodes().map((node, index) => {
      const sourceX = xScale(index);
      const coordY = 0;
      if (index < nodes.length - 1) {
        const targetX = xScale(index + 1);
        d3.select(node)
          .append('line')
          .attr('class', 'links')
          .style('stroke', '#000000')
          .join('line')
          .attr('x1', sourceX + 45)
          .attr('y1', coordY)
          .attr('x2', targetX)
          .attr('y2', coordY)
          .attr('transform', () => `translate(${-sourceX}, ${coordY})`);
      }
    });

    // #region Services
    // Add services groups
    d3.selectAll('.node').data(nodes).join('g').append('g').attr('class', 'services');
    // Add each services in groups
    d3.selectAll('.services')
      .data(nodes)
      .join('.services')
      .each((node, nodeIndex) => {
        const numberOfSiblings = links.filter(
          (link) => link.source === node.index || link.target === node.index,
        ).length;
        const numberOfLinks = numberOfSiblings + node.services.length;

        const radius = 150;
        const kPi = 2 * Math.PI;
        const coordinates = (servicesNb: number, serviceIndex: number) => {
          let x, y;
          if (numberOfSiblings === 1) {
            const firtOrLastNode = nodeIndex === 0 ? 1 : -1;
            x =
              radius *
              firtOrLastNode *
              Math.cos(((numberOfLinks - (serviceIndex + 1)) * kPi) / numberOfLinks);
            y =
              radius *
              firtOrLastNode *
              Math.sin(((numberOfLinks - (serviceIndex + 1)) * kPi) / numberOfLinks);
          } else if (numberOfSiblings === 2) {
            const parity = servicesNb % 2 === 0 ? 'even' : 'odd';
            if (parity === 'even') {
              const addOrRemoveFakeLinks = serviceIndex <= (servicesNb - 1) / 2 ? 0 : -1;
              x =
                radius *
                Math.cos(
                  ((numberOfLinks + addOrRemoveFakeLinks - (serviceIndex + 1)) * kPi) /
                    numberOfLinks,
                );
              y =
                radius *
                Math.sin(
                  ((numberOfLinks + addOrRemoveFakeLinks - (serviceIndex + 1)) * kPi) /
                    numberOfLinks,
                );
            } else if (parity === 'odd') {
              const addOrRemoveFakeLinks = serviceIndex <= (servicesNb - 1) / 2 ? 1 : -1;
              x =
                radius *
                Math.cos(
                  ((numberOfLinks + addOrRemoveFakeLinks - (serviceIndex + 1)) * kPi) /
                    (numberOfLinks + addOrRemoveFakeLinks),
                );
              y =
                radius *
                Math.sin(
                  ((numberOfLinks + addOrRemoveFakeLinks - (serviceIndex + 1)) * kPi) /
                    (numberOfLinks + addOrRemoveFakeLinks),
                );
            }
          }

          return { x, y };
        };
        //
        node.services.map((service, serviceIndex, servicesArr) => {
          const { x, y } = coordinates(servicesArr.length, serviceIndex);

          const serviceSel = d3
            .selectAll<d3.BaseType, Node>('.node')
            .filter((n) => n.index === node.index)
            .select('.services')
            .append('g')
            .attr('class', 'service')
            .style('display', 'none')
            .attr('transform', `translate(${x}, ${y})`);
          const _s32 = Math.sqrt(3) / 2;
          const radiusHex = 35;
          const pointData = [
            [-radiusHex / 2, radiusHex * _s32],
            [-radiusHex, 0],
            [-radiusHex / 2, -radiusHex * _s32],
            [radiusHex / 2, -radiusHex * _s32],
            [radiusHex, 0],
            [radiusHex / 2, radiusHex * _s32],
            [-radiusHex / 2, radiusHex * _s32],
          ];

          serviceSel
            .append('line')
            .attr('class', 'service-links')
            .attr('x1', x ? -x : 0)
            .attr('y1', y ? -y : 0)
            .attr('x2', 0)
            .attr('y2', 0)
            .style('stroke-dasharray', '5, 5')
            .attr('stroke', 'black')
            .attr('transform', 'scale(0.6)');
          serviceSel
            .selectAll('path.area')
            .data([pointData])
            .enter()
            .append('path')
            .attr('d', d3.line())
            .attr('fill', 'white')
            .style('opacity', '0.5')
            .style('transform', 'rotate(90deg)')
            .style('stroke', '#D5D5D5')
            .style('stroke-width', 2);

          serviceSel
            .append('image')
            .attr('xlink:href', '/assets/images/topology/' + setviceType[service.type] + '.svg')
            .attr('x', -10)
            .attr('y', -20)
            .style('opacity', '0.7')
            .attr('fill', 'black');

          serviceSel
            .append('text')
            .text(service.alias)
            .attr('x', 0)
            .attr('y', 12)
            .style('opacity', '0.7')
            .style('font-size', '9px')
            .style('text-anchor', 'middle')
            .attr('fill', 'black');
        });
      });
    // END MOCHE
    // #endregion

    let selectedNode: number;

    const onClickNode = (d: Node) => {
      if (selectedNode !== undefined && d.index === selectedNode) {
        const node = d3.select(listNodes.nodes()[selectedNode]);
        setSelectedNode(initialNode);
        unselectNode(node, nodes[selectedNode]);
        selectedNode = -1;
      } else if (selectedNode !== undefined && d.index !== selectedNode) {
        const node = d3.select(listNodes.nodes()[selectedNode]);
        unselectNode(node, nodes[selectedNode]);
        selectedNode = d.index;
        const newNode = d3.select(listNodes.nodes()[selectedNode]);
        selectNode(newNode, d);
        if (isCollapsed) {
          setCanvasWidth(canvasWidth - 250);
          setPanelWidth(300);
          setIsCollapsed(false);
        } else {
          setCanvasWidth(initialCanvasWidth);
          setPanelWidth(initialPanelWidth);
          setIsCollapsed(true);
        }
        if (d.services.length > 0) {
          newNode.selectAll('.service').style('display', 'block');
        }
      } else if (selectedNode === undefined) {
        const index = d.index;
        selectedNode = d.index;
        const node = d3.select(listNodes.nodes()[index]);
        selectNode(node, d);
        if (isCollapsed) {
          setCanvasWidth(canvasWidth - 250);
          setPanelWidth(300);
          setIsCollapsed(false);
        } else {
          setCanvasWidth(initialCanvasWidth);
          setPanelWidth(initialPanelWidth);
          setIsCollapsed(true);
        }
        if (d.services.length > 0) {
          node.selectAll('.service').style('display', 'block');
        }
      }
    };

    const onHoverNode = (d: Node) => {
      const index = d.index;
      const node = d3.select(listNodes.nodes()[index]);
      hovertNode(node, d);
    };

    const onHoverOutNode = (d: Node) => {
      const index = d.index;
      if (index !== selectedNode) {
        const node = d3.select(listNodes.nodes()[index]);
        unselectNode(node, d);
      }
    };

    const hovertNode = (node: d3.Selection<d3.BaseType, unknown, null, undefined>, d: Node) => {
      const sourceX = xScale(d.index);
      node.select('.links').attr('x1', sourceX + 60);
      node.select('circle').attr('r', 60);
      node.select('.memory-usage').attr('x', 25);
      node.select('.load').attr('transform', 'scale(1.3)');
      node.select('image').attr('transform', 'scale(1.5)');
    };

    const selectNode = (node: d3.Selection<d3.BaseType, unknown, null, undefined>, d: Node) => {
      setSelectedNode(d);
      const sourceX = xScale(d.index);
      node.select('.links').attr('x1', sourceX + 60);
      node.select('circle').attr('r', 60);
      node.select('circle').style('stroke', '#bd99ff');
      node.select('circle').attr('stroke-width', '3px');
      node.select('.memory-usage').attr('x', 25);
      node.select('.memory-usage').style('fill', d.value * 100 >= 27 ? 'white' : 'black');
      node.select('node').attr('transform', 'scale(1.3)');
      node.select('.load-value').style('fill', '#bd99ff');
      node.select('.load-path').style('fill', '#D5D5D5');
      node.select('.load-path').style('fill-opacity', '0.25');
      node.select('image').attr('transform', 'scale(1.5)');
    };

    const unselectNode = (node: d3.Selection<d3.BaseType, unknown, null, undefined>, d: Node) => {
      if (d !== undefined) {
        const sourceX = xScale(d.index);
        node.select('.links').attr('x1', sourceX + 45);
        node.select('circle').attr('r', 45);
        node.select('circle').style('stroke', 'black');
        node.select('circle').attr('stroke-width', '1px');
        node.select('.load').attr('transform', 'scale(1)');
        node.select('.memory-usage').attr('x', 18);
        node.select('.memory-usage').style('fill', 'black');
        node.select('.load-value').style('fill', '#D5D5D5');
        node.select('.load-path').style('fill', '#D5D5D5');
        node.select('.load-path').style('fill-opacity', '0');
        node.select('image').attr('transform', 'scale(1)');
        node.selectAll('.service').style('display', 'none');
      }
    };
    // Do not remove the empty array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="content">
      <Alert severity="info" style={{ margin: '30px 60px 0' }}>
        This browser application demonstrate how Luos natively allows direct access and control of
        any hardware specific product.{' '}
        <a href="https://github.com/Luos-io/Luos/issues/new?assignees=nicolas-rabault&labels=feature&template=feature-request.md&title=%5BNEW+FEATURE%5D+">
          💡 You can ask for new feature here. 💡
        </a>
      </Alert>
      <Grid container>
        <svg
          // ref={svgRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{ backgroundColor: '#F5F5F5' }}
        >
          <g className="links" style={{ stroke: 'red' }}></g>
          <g className="nodes"></g>
          <g className="newNodes"></g>
          <g className="newServices"></g>
        </svg>
        <Paper
          elevation={3}
          id="sidePanel"
          style={{
            width: panelWidth,
            height: canvasHeight,
            backgroundColor: 'white',
            borderLeft: '1px solid #A8A8A8',
            color: 'black',
            textAlign: 'center',
            borderRadius: 0,
            float: 'right',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '30px',
              cursor: 'pointer',
              borderBottom: '1px solid #A8A8A8',
            }}
            onClick={() => {
              if (isCollapsed) {
                setCanvasWidth(canvasWidth - 250);
                setPanelWidth(300);
                setIsCollapsed(false);
              } else {
                setCanvasWidth(initialCanvasWidth);
                setPanelWidth(initialPanelWidth);
                setIsCollapsed(true);
              }
            }}
          >
            {isCollapsed === true ? (
              <DoubleArrowIcon
                sx={{
                  transform: 'rotate(180deg)',
                }}
              />
            ) : (
              <DoubleArrowIcon />
            )}
          </div>

          {isCollapsed === false ? (
            <>
              {Object.keys(selectedNode.services).length > 0 ? (
                <SelectedNode node={selectedNode} />
              ) : (
                <p style={{ fontFamily: 'Roboto mono' }}>Please select a node</p>
              )}{' '}
            </>
          ) : (
            ''
          )}
        </Paper>
      </Grid>
    </div>
  );
};
export default Chart;
